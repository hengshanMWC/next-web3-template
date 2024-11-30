/// <reference path="react" />
interface IClassName {
  className?: string
}

interface IChildren {
  children: React.ReactNode
}

interface ICommonProps extends IClassName, IChildren {}
