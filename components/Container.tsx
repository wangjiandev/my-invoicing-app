import { cn } from '@/lib/utils'

interface ContainerProps extends React.ComponentProps<'div'> {}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={cn('mx-auto max-w-5xl', className)} {...props}>
      {children}
    </div>
  )
}

export default Container
