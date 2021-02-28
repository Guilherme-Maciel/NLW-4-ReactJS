import { useContext } from 'react';
import {ChallengesContext} from '../contexts/ChallengeContext';
import styles from '../styles/components/Completed.module.css';

export function CompletedChallenges(){
    const {challengesCompleted} = useContext(ChallengesContext)


    return(
        <div className={styles.completedContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>

        </div>
    );
}