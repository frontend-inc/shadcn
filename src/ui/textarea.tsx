import * as React from 'react'

import { cn } from '../lib/utils'

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:ring-offset-3 disabled:cursor-not-allowed disabled:opacity-50 text-foreground',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Textarea.displayName = 'Textarea'

export { Textarea }
