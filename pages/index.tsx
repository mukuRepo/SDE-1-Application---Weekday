import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import { Terminal } from "lucide-react"
import Button from '@mui/material/Button';

export default function Home() {

  const redirectToDocs = () => {
    window.open('https://ui.shadcn.com/docs', '_blank')
  }

  return (
    <>
      <Alert>
        <Terminal className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          TailwindCSS is setup with Radix and Shadcn UI <br/>
          <Button variant="contained">Hello world</Button>
        </AlertDescription>
      </Alert>
    </>
  )
}
