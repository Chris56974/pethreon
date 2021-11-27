import { PledgeType } from "../../utils";
import { Pledge } from "../Pledge/Pledge"
import styles from "./PledgeList.module.scss"

interface PledgeListProps {
  pledges: PledgeType[],
  textForWhenItsEmpty: string,
  isCreator: boolean
}

export const PledgeList = ({ pledges, isCreator, textForWhenItsEmpty }: PledgeListProps) => {
  return (
    <ul className={pledges.length === 0 ? styles.emptyPledgeBox : styles.pledgeBox}>
      {pledges
        .map((pledge: PledgeType) => <Pledge
          pledge={pledge}
          creator={isCreator}
          key={isCreator ? pledge.contributorAddress : pledge.creatorAddress}
        />)
      }
      {pledges.length === 0 ? <li className={styles.emptyPledgeText}>{textForWhenItsEmpty}</li> : null}
    </ul>
  )
}