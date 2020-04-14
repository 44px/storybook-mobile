import React from 'react'
import Button from '../Button'
import '../Button/index.css'
import cat from './cat.jpg'

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => <Button>Hello Button</Button>

export const Emoji = () => (
  <div className="overflow">
    <button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
    <a href="/foo">test</a>
    <img src={cat} alt="" style={{ width: '300px' }} />
    <img src={cat} alt="" style={{ width: '300px' }} srcSet="sdfdsf" />
    <label htmlFor="">
      sfdsfds
      <input type="text" autoComplete="foo" />
    </label>
    <label htmlFor="">
      whooaaa
      <input type="text" inputMode="decimal" />
    </label>
  </div>
)
