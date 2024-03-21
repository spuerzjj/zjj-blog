import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

import { useState, Fragment } from 'react'
import { getIsDark, getTheme, setTheme, Theme } from '../../utils/theme'

const modeList: Array<Theme> = ['light', 'dark', 'system']
const themeVal = getTheme()
const darkVal = getIsDark()

function ThemeBtn() {
  const [selected, setSelected] = useState(themeVal)
  const [isDark, setIsDark] = useState(darkVal)

  const handleSelected = (val: Theme) => {
    setSelected(val)
    setTheme(val)
    setIsDark(getIsDark())
  }

  return (
    <Listbox value={selected} onChange={handleSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative  cursor-pointer">
          {() => {
            return isDark ? (
              <img src="/svg/dark.svg" alt="" />
            ) : (
              <img src="/svg/light.svg" alt="" />
            )
          }}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {modeList.map((mode, idx) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={mode}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {mode}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default ThemeBtn
