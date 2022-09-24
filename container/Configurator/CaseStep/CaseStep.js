import Error from "next/error";
import { useRouter } from "next/router"
import { CaseStepWrapper } from "./CaseStep.style"


const CaseStep = ({ data }) => {

  const router = useRouter();

  return (
    <CaseStepWrapper>
        <button
          onClick={() => {
            router.push('/configurator/cpu-step')

          }}
        >
          Page suivante
        </button>
    </CaseStepWrapper>
  )
}

export default CaseStep