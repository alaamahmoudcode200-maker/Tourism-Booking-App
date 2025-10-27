import CardModelDeitals from "./cardmodel"
export default function ModelDeitals() {
  return (
 <div>
  
<dialog id="my_modal_4" className="modal ">
  <div className="modal-box w-11/12 text-black max-w-5xl bg-white">
    <CardModelDeitals/>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="px-3 py-2 text-white rounded-lg bg-orange-500">Close</button>
      </form>
    </div>
  </div>
</dialog>
 </div>

  )
}