import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTrigger>Sign Up</DialogTrigger>
            <DialogContent className="flex justify-center flex-col items-center py-12 px-10 md:rounded-[28px]  ">
                <DialogHeader>
                    <DialogTitle className="mb-16 text-3xl font-sans">Sign up Bilethub</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
