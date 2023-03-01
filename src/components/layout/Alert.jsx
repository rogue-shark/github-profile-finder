import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

function Alert() {
    const {alert} = useContext(AlertContext)

    const svg = <svg viewBox="0 0 24 24" width="28" height="28" stroke="#fff200" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
//if not null then
return (
    alert !== null && (
      <p className='flex items-start mb-4 space-x-2'>
        {alert.type === 'error' && (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#fff200" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        )}
        <p className='flex-1 text-base font-semibold leading-7 text-white'>
          {alert.msg}
        </p>
      </p>
    )
  )
}

export default Alert