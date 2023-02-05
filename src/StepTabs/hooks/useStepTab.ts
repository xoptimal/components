import { useContext } from 'react';
import StepTabsContext from '../StepTabsContext';

export default function useStepTab() {
    return useContext(StepTabsContext)
}
