import React from 'react'
import { Controller, FieldValues, Path } from 'react-hook-form'
import { Input } from './ui/input';
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form';

interface FormFielProps<T extends FieldValues> {
  control: Path<T>; // Replace with the correct type for your control
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password'| 'file';
}

const FormField = ({control, name, label, placeholder, type="text"}: FormFielProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className='input' type={type} placeholder={placeholder} {...field} />
        </FormControl>
        {/* <FormDescription>
          This is your public display name.
        </FormDescription> */}
        <FormMessage />
      </FormItem>
    )}
  />
)

export default FormField
