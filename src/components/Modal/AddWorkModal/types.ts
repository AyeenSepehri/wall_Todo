import {CardDataTypes} from "@/components/Cards/types";

export interface EditAndAddWorkModalProps {
    onClose: () => void;
    todoItem?: CardDataTypes
}