import {$localize} from "@angular/localize/init";

type UpsertButton = {
  label: string
  icon: string
}
export const upsertButton = (editing: boolean = false): UpsertButton => {
  return  {
    label: editing ? $localize `Save` : $localize `Add`,
    icon: editing ? 'fas fa-add' : 'fas fa-pen'
  }
}
