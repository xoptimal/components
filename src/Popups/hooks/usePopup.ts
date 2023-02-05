import { useContext } from 'react';
import PopupContext, { PopupType } from '../PopupContext';

export default function usePopup<V = any>(): PopupType<V> {
  return useContext(PopupContext);
}
