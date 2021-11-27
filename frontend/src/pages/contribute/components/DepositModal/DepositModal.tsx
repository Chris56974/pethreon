import { useState, ChangeEvent, FormEvent, Dispatch, SetStateAction } from "react"
import { BigNumberish, utils } from "ethers"
import { CurrencyField, SubmitModalButton } from "../../../../components"
import { deposit, getContributorBalance, } from "../../../../pethreon"
import { MetamaskError, Denomination } from "../../../../utils"
import { EtherDenominationButtons, Disclaimer } from ".."
import { DepositSVG } from "../../../../svgs"
import styles from "./DepositModal.module.scss"

interface DepositProps {
  closeModal: (() => void),
  setLoading: Dispatch<SetStateAction<boolean>>,
  setBalance: Dispatch<SetStateAction<string>>,
}

export const DepositModal = ({ closeModal, setLoading, setBalance }: DepositProps) => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState<Denomination>(Denomination.ETHER)
  const [isInvalid, setInvalid] = useState(false)

  const submitDeposit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (+amount <= 0) {
      setInvalid(true)
      return window.alert("Please insert an amount")
    }

    closeModal()

    let amountInWei: BigNumberish = amount
    if (currency === Denomination.ETHER) amountInWei = utils.parseEther(amount)
    if (currency === Denomination.GWEI) amountInWei = utils.parseUnits(amount, "gwei")
    setLoading(true)

    try {
      await deposit(amountInWei)
      const newBalance = await getContributorBalance()
      setBalance(newBalance)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      window.alert(`Error: ${(error as MetamaskError).message}`)
    }
  }

  return (
    <form className={styles.depositFormLayout}>
      <h3 className={styles.depositHeading}>How much to deposit?</h3>
      <CurrencyField
        invalid={isInvalid}
        amount={amount}
        getAmount={(event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)}
      />
      <EtherDenominationButtons setCurrency={setCurrency} />
      <div className={styles.subsectionDetails}>
        <Disclaimer />
        <SubmitModalButton disabled={false} onSubmit={submitDeposit}>Deposit <DepositSVG className={styles.depositSVG} /></SubmitModalButton>
      </div>
    </form>
  );
}