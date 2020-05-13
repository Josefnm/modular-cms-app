import React, { PropsWithChildren } from 'react'

interface FooProps<T> {
  title: string
  value: T
}

const Foo = <T,>({ children, title, value }: PropsWithChildren<FooProps<T>>) => {
  return (
    <div>
      <span>
        {title} - {value}
      </span>
      {children}
    </div>
  )
}

export default Foo
