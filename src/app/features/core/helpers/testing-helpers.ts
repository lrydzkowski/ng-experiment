import { DebugElement } from '@angular/core';
import { defer } from 'rxjs';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: T) {
  return defer(() => Promise.reject(errorObject));
}

export const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 },
};

export function click(el: DebugElement | HTMLElement, eventObj: unknown = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
