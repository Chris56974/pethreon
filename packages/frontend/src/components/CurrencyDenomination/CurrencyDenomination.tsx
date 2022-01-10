import { Denomination } from "../../utils"
import styles from "./CurrencyDenomination.module.scss"

interface CurrencyDenominationProps {
  defaultChecked: boolean,
  denomination: Denomination
};

export const CurrencyDenomination = ({ defaultChecked, denomination }: CurrencyDenominationProps) => {
  return <label className={styles.currencyContainer}>
    <input
      type="radio"
      name="currency"
      value={denomination}
      className={styles.radioButtonInput}
      defaultChecked={defaultChecked}
      required
    />
    <span className={styles.radioButtonTextSpan}>{denomination}</span>
  </label>
}