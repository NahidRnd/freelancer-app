
function ConfirmDelete({ onClose, disabled, onConfirm }) {
  return (
    <div>
      <p className="font-bold text-base mb-6">آیا از حذف مطمین هستید ؟</p>
      <div className="flex items-center gap-x-6">
        <button onClick={onClose} disabled={disabled} className="btn btn--primary flex-1">لغو</button>
        <button onClick={onConfirm} disabled={disabled} className="btn btn--danger flex-1">تایید</button>
      </div>
    </div>
  )
}

export default ConfirmDelete
