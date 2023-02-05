import type { SubmitterProps, SubmitterRef } from './Submitter';
import Submitter from './Submitter';

import type { PopupsProps, PopupsRef } from './Popups';
import Popups, { usePopup } from './Popups';

import type { PopupWindowProps } from './PopupWindow';
import PopupWindow from './PopupWindow';

import type { StepTabsProps } from './StepTabs';
import StepTabs, { getAllValues, useStepTab } from './StepTabs';

export {
  Submitter,
  PopupWindow,
  StepTabs,
  usePopup,
  useStepTab,
  getAllValues
};

export type {
  PopupWindowProps,
  SubmitterProps,
  SubmitterRef,
  PopupsRef,
  PopupsProps,
  StepTabsProps,
};

export default Popups;

