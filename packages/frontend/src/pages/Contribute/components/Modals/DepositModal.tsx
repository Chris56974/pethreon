import { BigNumber, utils } from "ethers"
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"
import { Consent, CurrencyButton, CurrencyButtons, CurrencyField, Disclaimer, Submit } from "../../../../components"
import { deposit, getContributorBalanceInWei } from "../../../../pethreon"
import { DepositSVG } from "../../../../svgs"
import { Denomination, MetamaskError } from "../../../../utils"
import styles from "./DepositModal.module.scss"

interface DepositProps {
  closeModal: (() => void),
  setLoading: Dispatch<SetStateAction<boolean>>,
  setBalance: Dispatch<SetStateAction<string>>,
}

export const DepositModal = ({ closeModal, setLoading, setBalance }: DepositProps) => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState<Denomination>(Denomination.ETHER)
  const [disabled, setDisabled] = useState(true)

  const submitDeposit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (+amount <= 0) return window.alert("Please insert an amount")

    closeModal()
    setLoading(true)

    let amountInWei: BigNumber = BigNumber.from(amount)
    if (currency === Denomination.ETHER) amountInWei = utils.parseEther(amount)
    if (currency === Denomination.GWEI) amountInWei = utils.parseUnits(amount, "gwei")

    try {
      await deposit(amountInWei)
      const newBalance = await getContributorBalanceInWei()
      const newBalanceEther = await utils.formatEther(newBalance)
      const newBalanceEtherString = await newBalanceEther.toString()
      setBalance(newBalanceEtherString)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      window.alert(`Error: ${(error as MetamaskError).message}`)
    }
  }

  return (
    <form className={styles.form}>
      <h3 className={styles.heading}>How much to deposit?</h3>
      <CurrencyField
        className={styles.currencyField}
        value={amount}
        setValue={(event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)}
      />
      <CurrencyButtons className={styles.currencyButtons} setCurrency={setCurrency}>
        <CurrencyButton checked denomination={Denomination.ETHER} />
        <CurrencyButton denomination={Denomination.GWEI} />
        <CurrencyButton denomination={Denomination.WEI} />
      </CurrencyButtons>
      <Disclaimer
        className={styles.disclaimer}
      />
      <Consent
        className={styles.consent}
        setConsent={setDisabled}
      />
      <Submit
        className={styles.submit}
        disabled={disabled}
        onSubmit={submitDeposit}
      >
        Deposit <DepositSVG className={styles.depositSVG} />
      </Submit>
    </form>
  );
}