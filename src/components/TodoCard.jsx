import React from 'react'

const TodoCard = ({heading}) => {
  return (
    <div className='px-6 py-4 rounded-md bg-[#F1FAFF] w-fit my-4'>
        <h3 className='font-bold text-slate-900 text-2xl'>{heading}</h3>
        <ul className='text-slate-700 text-base'>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eligendi facere atque.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eligendi facere atque.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eligendi facere atque.</li>
        </ul>
    </div>
  )
}

export default TodoCard