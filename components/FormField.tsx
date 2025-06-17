import React from 'react'
import { Controller, Field, FieldValues, Path } from 'react-hook-form'

interface FormFielProps<T extends FieldValues> {
  control: Path<T>; // Replace with the correct type for your control
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password'| 'file';
}

const FormField = ({control, name, label, placeholder, type="text"}: FormFielProps<T>) => (
  <Controller>
    name={name},
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  </Controller>
)

export default FormField
