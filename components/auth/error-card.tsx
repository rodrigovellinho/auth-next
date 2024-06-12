import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import CardWrapper from "./card-wrapper";

export default function ErrorCard() {
  return (
    <>
      <CardWrapper
        backButtonHref="/auth/login"
        headerLabel="Ops! Something went wrong!"
        backButtonLabel="Back to login"
      >
        <div className="w-full flex justify-center items-center">
          <ExclamationTriangleIcon className="text-destructive" />
        </div>
      </CardWrapper>
    </>
  );
}
