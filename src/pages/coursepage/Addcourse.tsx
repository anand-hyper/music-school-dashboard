import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface AddCourseDialogProps {
  onAddCourse: () => void;
  course?: any; // Optional prop for course data (used in edit mode)
}

export function AddCourseDialog({ onAddCourse, course }: AddCourseDialogProps) {
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      Name: course?.Name,
      Description: course?.Description,
      Instructor: course?.Instructor,
      Instrument: course?.Instrument,
      Dayofweek: course?.Dayofweek,
      Price: course?.Price,
      Action: course?.Action || "Yes",
      Noofstud: course?.Noofstud || 0,
    },
  });

  useEffect(() => {
    // Update form values when the `course` prop changes
    if (course) {
      console.log("sks-->", course)
      setOpen(true);
      form.reset({
        Name: course.Name || "",
        Description: course.Description,
        Instructor: course.Instructor,
        Instrument: course.Instrument,
        Dayofweek: course.Dayofweek,
        Price: course.Price,
        Action: course.Action || "Yes",
        Noofstud: course.Noofstud || 0,
      });
    }
  }, [course, form]);

  const onSubmit = (data: any) => {
    // Fetch the existing courses from localStorage
    const existingCourses = JSON.parse(localStorage.getItem("courses") || "[]");

    let updatedCourses;
    if (course) {
      // Edit mode: Update the existing course
      updatedCourses = existingCourses.map((c: any) =>
        c.Name === course.Name ? { ...c, ...data } : c
      );
    } else {
      // Add mode: Append the new course data
      updatedCourses = [...existingCourses, data];
    }

    // Update the localStorage with the new array
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    // Call the callback function to refresh the table
    onAddCourse();

    // Reset the form and close the dialog
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {!course && (
          <Button className="bg-pink-200 text-black hover:bg-pink-300">
            + Add Course
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{course ? "Edit Course" : "Add Course"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Course Name"
                      {...field}
                      disabled={!!course}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {course && (
              <Input
                type="hidden"
                value={course.Name}
                {...form.register("Name")}
              />
            )}
            <FormField
              control={form.control}
              name="Description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Instructor"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Instructor" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Instrument"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an instrument" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="guitar">Guitar</SelectItem>
                      <SelectItem value="piano">Piano</SelectItem>
                      <SelectItem value="violin">Violin</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Dayofweek"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a day" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="monday">Monday</SelectItem>
                      <SelectItem value="tuesday">Tuesday</SelectItem>
                      <SelectItem value="wednesday">Wednesday</SelectItem>
                      <SelectItem value="thursday">Thursday</SelectItem>
                      <SelectItem value="friday">Friday</SelectItem>
                      <SelectItem value="saturday">Saturday</SelectItem>
                      <SelectItem value="sunday">Sunday</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="string" placeholder="Price" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-pink-200 text-black hover:bg-pink-300">
                {course ? "Update Course" : "Add Course"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
