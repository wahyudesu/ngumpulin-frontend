import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { PenSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const GradeEditModal = ({ document, onSave }: { document: any, onSave: any }) => {
    const [open, setOpen] = useState(false);
    const [grade, setGrade] = useState(document.grade || "");

    const handleSave = () => {
        onSave(document.id, parseFloat(grade));
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button  size="sm" className="w-full">
                    <PenSquare className="mr-2 h-4 w-4" />
                    {document.grade || "Input Nilai"}
                </Button>
                {/* <Button
                    className="w-full rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                    size="icon"
                    aria-label="Options"
                >
                    <PenSquare className="mr-2 h-4 w-4" />
                    {document.grade || "Input Nilai"}
                </Button> */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Input Nilai</DialogTitle>
                    <DialogDescription>
                        Masukkan nilai untuk {document.nameStudent}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="grade" className="text-right">
                            Nilai
                        </Label>
                        <Input
                            id="grade"
                            type="number"
                            min="0"
                            max="100"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSave}>Simpan</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

const FeedbackEditModal = ({ document, onSave }: { document: any, onSave: any }) => {
    const [open, setOpen] = useState(false);
    const [feedback, setFeedback] = useState(document.feedback || "");

    const handleSave = () => {
        onSave(document.id, feedback);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                    <PenSquare className="mr-2 h-4 w-4" />
                    {document.feedback ? "Edit Feedback" : "Tambah Feedback"}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Feedback Tugas</DialogTitle>
                    <DialogDescription>
                        Berikan feedback untuk tugas {document.nameStudent}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 gap-4">
                        <Label htmlFor="feedback">
                            Feedback
                        </Label>
                        <Textarea
                            id="feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Masukkan feedback..."
                            className="h-32"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSave}>Simpan Feedback</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export { FeedbackEditModal, GradeEditModal }