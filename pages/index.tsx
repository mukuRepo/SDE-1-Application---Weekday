import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import { Terminal } from "lucide-react"
import {Button} from "@/components/ui/button";

export default function Home() {

  const redirectToDocs = () => {
    window.open('https://ui.shadcn.com/docs', '_blank')
  }

  return (
    <>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          TailwindCSS is setup with Radix and Shadcn UI <br/>
          <Button size={'sm'} onClick={redirectToDocs}>Docs Here</Button>
        </AlertDescription>
      </Alert>
    </>
  )
}
