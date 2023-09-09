import Image from 'next/image'
import React from 'react'
import Layout from './components/Layout'
import Title from './components/Title'
import InputText from './components/InputText'
import Button from './components/Button'
import Card from './components/Card'

const annotations = [
  {
    createdAt: "2023-09-06T16:09:50.306Z",
    id: 248,
    title: "Anotação 1",
    subtitle: "Subtítulo da Anotação 1",
    content: "Conteúdo da Anotação 1",
  },
  {
    createdAt: "2023-09-06T16:15:30.123Z",
    id: 249,
    title: "Anotação 2",
    subtitle: "Subtítulo da Anotação 2",
    content: "Conteúdo da Anotação 2",
  },
  {
    createdAt: "2023-09-06T16:20:15.789Z",
    id: 250,
    title: "Anotação 3",
    subtitle: "Subtítulo da Anotação 3",
    content: "Conteúdo da Anotação 3",
  },
];

export default function Home() {
  return (
    <Layout>
      <Title>Fundamentos de React</Title>

      <form className='max-w-md mx-auto space-y-4'>
        <div className='block'>
          <InputText placeholder="Title" name="title"></InputText>
        </div>
        <div className='block'>
          <InputText placeholder="Subtitle" name="subtitle"></InputText>
        </div>
        <div className='block'>
          <InputText placeholder="Content" name="content"></InputText>
        </div>
        <div className='block'>
          <Button>Enviar</Button>
        </div>
      </form>
      
      <div className='max-w-md mx-auto mt-8'>
        {annotations.map((annotation) => (
          <Card key={annotation.createdAt} {...annotation} />
        ))}
      </div>

    </Layout>
  )
}
