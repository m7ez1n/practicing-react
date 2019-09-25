# Praticando o ReactJS :smirk:

Esse repositório é destinado a um projeto que vou praticar react. Para aprender certinho a configurar os recursos do react e ferramentas a aplicação irá fazer o uso de: 

- [ ] Webpack
- [ ] Babel
- [ ] Webpack Dev Server 
- [ ] ReactJS

Será feito uma aplicação parecida com o facebook (bem mais clean) e não conterá nenhuma API ou back-end.

## Tela da Aplicação :yum:

![facebook](https://user-images.githubusercontent.com/44484286/65561745-fe970f80-df19-11e9-80a8-e74cfaaff821.png)

O layout poderá mudar, o principal objetivo é reproduzir os componentes em tela.

## Componentes :mag:

![components](https://user-images.githubusercontent.com/44484286/65561848-59c90200-df1a-11e9-9b4d-44a65605d318.png)

**_Header (Amarelo):_** Responsável por exibir a logo e o link para acessar o perfil;

**_PostList (Verde):_** Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do state do componente e não em uma variável comum, por exemplo:

```js
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        // Restante dos dados de um novo post
      }
    ]
  };
}
```

**_Post (Vermelho):_** Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList, ou seja, lá no PostList você terá algo assim:

```js
posts.map(post => <Post key={post.id} data={post} />)
```

**_Comment (Azul):_** Responsável por exibir um comentário. Os dados do comentário virão por uma propriedade do componente. Dentro do componente Post você terá um novo .map para listar os comentários do post:

```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />)
```

<h2 align="center">
  Acessem a He4rt :purple_heart:
</h2>

<h3 align="center">
  <img src="https://heartdevs.com/wp-content/uploads/2018/12/logo.png" width="215"><br>
    Visite nosso discord, vamo codar junto!! :godmode:
	<a href="https://discord.io/He4rt" target="_blank">
	<img src="https://discordapp.com/api/guilds/452926217558163456/embed.png" alt="Discord server"/></a><br>
</h3>

[Twitter He4rt](https://twitter.com/He4rtDevs)

[Meu Twitter](https://twitter.com/m7AeiHe4rt)
