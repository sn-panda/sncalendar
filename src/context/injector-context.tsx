import { Injector } from '@furystack/inject/dist/Injector'
import { ConsoleLogger } from '@furystack/logging'

import React from 'react'
import '../utils/injector-extensions'

export const snInjector = new Injector()
snInjector.options.owner = 'SnApp'
snInjector.useLogging(ConsoleLogger)

export const InjectorContext = React.createContext(snInjector)
