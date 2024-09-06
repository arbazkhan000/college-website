import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const yearModel = ["2021", "2022", "2023", "2024", "2025"];
const modeldesc = [
    "Bca_first_sem_CFOA",
    "Bca_first_sem_BC",
    "Bca_first_sem_PM",
    "Bca_first_sem_PPA",
    "Bca_first_sem_Math"
];

const Notespage = () => {
    // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    return (
        <>
            <div className="max-w-6xl mx-auto mt-5 shadow-[rgba(149,157,165,0.2)_0px_8px_24px] flex items-start overflow-hidden h-[350px]">
                <div className="p-5">
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <div className="flex items-center space-x-10">
                                {yearModel.map((elem) => {
                                    return (
                                        <Button
                                            key={elem}
                                            className="flex items-center space-x-5"
                                            variant="outline"
                                        >
                                            {elem}
                                        </Button>
                                    );
                                })}
                            </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    <div className="flex flex-col">
                                        {modeldesc.map((desc) => (
                                            <p key={desc} className="pb-3">
                                                <a href="#" target="_blank">
                                                    {desc}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Exit</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </>
    );
};

export default Notespage;
