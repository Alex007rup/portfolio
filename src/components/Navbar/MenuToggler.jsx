/* eslint-disable react/prop-types */
let MenuToggler = ({ handleCheck }) => {
  return (
    <>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        onClick={() => {
          handleCheck();
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  )
}

export default MenuToggler