<p align="center"> <img src="/readme/Logo.png" alt="Equipe bytech"/></p>
<br>
<p align="center">
  <samp>
    <a href="#o-projeto">Projeto</a> ▪️
    <a href="#proposta">Proposta</a> ▪️
    <a href="#tecnologias">Tecnologias</a> ▪️
    <a href="#cronograma-das-sprints">Cronograma das Sprints</a> ▪️
    <a href="#product-backlog">Product Backlog</a> ▪️
    <a href="#sprint-backlog">Sprints Backlog</a> ▪️
    <a href="#burndown-das-sprints">Burndown das sprints</a> ▪️
    <a href="#detalhes-das-sprints">Detalhes das Sprints</a> ▪️
    <a href="#equipe">Equipe</a>
    
  </samp>
</p>

<br>

<h1 align="center"><samp>O PROJETO</samp></h1>

![Equipe bytech]()

<br>
<h1 align="center"><samp>PROPOSTA</samp></h1>

O presente projeto tem por objetivo desenvolver um sistema de gerenciamento de usuários (p.ex. criação, visualização, edição e remoção), assim como um serviço de autenticação/autorização.

### 📖 Requisitos funcionais
+ - [x] Acessar o sistema por meio de login
+ - [] Cadastro de novos usuários
+ - [] Editar usuários já cadastrados
+ - [x] Perfis administradores devem visualizar os usuários cadastrados em forma de lista.
+ - [] Desativar um usuário através da exclusão lógica.
+ - [] Funcionalidade "esqueci minha senha".

### 🔖 Requisitos não funcionais
+ - [x] Documentação apresentada no Github
+ - [] Manual do usuário
+ - [] Utilização do GCP
+ - [] Utilização de ferramentas para CI/CD
<br>

<h1 align="center"><samp>TECNOLOGIAS</samp></h1>

![Equipe bytech](/readme/Technologies.png)

<table align="center">
  <tr>
    <th><b>Front-end</b></th>
    <th><b>Back-end</b></th>
    <th><b>Ferramentas</b></th>
  </tr>
  <tr>
    <td>React</td>
    <td>NodeJS</td>
    <td>Postgres</td>
  </tr>
  <tr>
    <td></td>
    <td>SQL</td>
    <td>Figma</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Git</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Github</td>
  </tr>
   <tr>
    <td></td>
    <td></td>
    <td>Docker</td>
  </tr>
   <tr>
    <td></td>
    <td></td>
    <td>GCP</td>
  </tr>
</table>

<br>
<h1 align="center"><samp>CRONOGRAMA DAS SPRINTS</samp></h1>

![Equipe bytech](/readme/Cronograma.png)

<br>
<h1 align="center"><samp>PRODUCT BACKLOG</samp></h1>

<p align="center">
    <img src="/readme/Backlog.png" width="50%" />
</p>

<h1 align="center"><samp>SPRINT BACKLOG</samp></h1>

<p align="center">
    <img src="/readme/Backlog Sprints.png" width="80%" />
 </p>

<br>
<h1 align="center"><samp>BURNDOWN DAS SPRINTS</samp></h1>

<br>
<h1 align="center"><samp>PRIMEIRA SPRINT</samp></h1>

![Equipe bytech](/readme/Burndown.png)

<br>
<h1 align="center"><samp>DETALHES DAS SPRINTS</samp></h1>
<h2>Sprint 1</h2>
<details>
  <summary>Detalhes</summary>
  <h3 align="center">Demonstração de usabilidade</h3>
   <br>
  <h4 align="center">Tela de login<br></h4>
  <p align="center">
    <img src="/readme/login_dashboard.gif" width="65%" />
  </p>
  <p align="justify">Demonstração da tela de login e autenticação. Esta interface contempla o processo de login e o padrão de autenticação.</p>
  
 <br>
  <h4 align="center">Tela dashboard<br></h4>
  <p align="center">
    <img src="/readme/login_dashboard.gif" width="65%" />
  </p>
  <p align="justify">Demonstração da tela dashboard versão Administrador. Esta interface apresenta as informações dos usuários do sistema (p.ex. Quantidade de usuários cadastrados, Nome dos usuários, Usuários ativos, etc.)</p>
  
<br>
  <h3 align="center">Banco de Dados</h3>
  <h4 align="center">Modelo conceitual<br></h4>
  <p align="center">
    <img src="/readme/modeloConceitual_BD.png" width="65%" />
  </p>
  <p align="justify">A princípio foram identificadas as seguintes entidades: <i>User</i> e <i>Profile</i>. A entidade <i>User</i> contêm informações sobre os usuários do sistema com os atributos <i>ID</i> chave primária da tabela; <i>fullName</i>; <i>userName</i>; <i>cpfCNPJ</i> chave única; <i>email</i>; <i>password</i>; <i>active</i>; <i>createDate</i>; <i>lastUpdate</i>. A entidade <i>Profile</i> abriga informações relativas aos perfis dos usuários, diferenciando os tipos de usuários (p.ex. Administrador e Usuários) através do atributo <i>type</i> para atribuir permissões relativas a cada classificação de perfil.Essa entidade é composta pelos atributos <i>ID</i> que é a chave primária; <i>userID</i> chave estrangeira da tabela <i>Users</i>; e <i>type</i>.</p>
  
  <br>
  <h4 align="center">Modelo lógico<br></h4>
  <p align="center">
    <img src="/readme/modeloLogico_BD.png" width="65%" />
  </p>
  <p align="justify">O modelo de dados lógico é caracterizado pelas entidades: <i>User</i> e <i>Profile</i>. A entidade <i>User</i> contêm os seguintes atributos: <i>ID</i> (chave primária) do tipo inteiro, <i>fullName</i> do tipo baseado em caracteres, <i>userName</i> do tipo baseado em caracteres, <i>cpfCNPJ</i> do tipo baseado em caracteres, <i>email</i> do tipo baseado em caracteres, <i>password</i> do tipo baseado em caracteres, <i>active</i> do tipo booleano, <i>createdDate</i> do tipo dateTime e <i>lastUpdate</i> do tipo dateTime. A entidade <i>Profile</i> contêm os seguintes atributos: <i>ID</i> (chave primária) do tipo inteiro, <i>userID</i> (chave extrangeira) do tipo baseado em caracteres e <i>type</i> do tipo TinyInt. </p>
    <p align="justify">As relações entre as entidades <i>User</i> e <i>Profile</i> são todas do tipo <b>1:1</b>.</p>
    
 <br>
  <h4 align="center">Inserção de dados no Banco<br></h4>
  <p align="center">
    <img src="/readme/povoando_BD.gif" width="65%" />
  </p>
  <p align="justify">Demonstração do funcionamento do banco de dados através da inserção de usuários.</p>

</details>

<br>
<h1 align="center"><samp>EQUIPE</samp></h1>

<table align="center">
  <tr>
    <th><b>Nome</b></th>
    <th><b>Função</b></th>
    <th><b>Github</b></th>
    <th><b>Linked-In</b></th>
  </tr>
    <tr>
    <td>João Henrique</td>
    <td>Desenvolvedor</td>
    <td><a href="https://github.com/JoaoHenrique7">Github</a></td>
    <td><a href="https://www.linkedin.com/in/jo%C3%A3o-henrique-trist%C3%A3o-b63385207/">Linked-In</a></td>
  </tr>
   <tr>
    <td>Micael Leal</td>
    <td>Desenvolvedor</td>
    <td><a href="https://github.com/micael-leal">Github</a></td>
    <td><a href=""></a></td>
  </tr>
    <tr>
    <td>Camila Redondo</td>
    <td>Scrum Master</td>
    <td><a href="https://github.com/CamilaRedondo">Github</a></td>
    <td><a href="https://www.linkedin.com/in/camila-silveira-redondo-7941631ab/">Linked-In</a></td>
  </tr>
  <tr>
    <td>Gustavo Marques</td>
    <td>Desenvolvedor</td>
    <td><a href="https://github.com/gusta7597">Github</a></td>
    <td><a href="https://www.linkedin.com/in/gustavo-marques-lima-695b331a2/">Linked-In</a></td>
  </tr>
    <tr>
    <td>Henrique Neto</td>
    <td>Desenvolvedor</td>
    <td><a href="https://github.com/henriqFerreira">Github</a></td>
    <td><a href="https://www.linkedin.com/in/henriquepfneto/">Linked-In</a></td>
  </tr>
  <tr>
    <td>Leandro Aquino</td>
    <td>Desenvolvedor</td>
    <td><a href="https://github.com/leandroteixeira97">Github</a></td>
    <td><a href="https://www.linkedin.com/in/leandroteixeira97/">Linked-In</a></td>
  </tr>
  <tr>
    <td>Simone Kanzawa</td>
    <td>Product Owner</td>
    <td><a href="https://github.com/Simonehk">Github</a></td>
    <td><a href=""></a></td>
  </tr>
  <tr>
    <td>Yago Pereira</td>
    <td>Desenvolvedor</td>
    <td><a href="https://github.com/YagoPSilva">Github</a></td>
    <td><a href="https://www.linkedin.com/in/yago-pereira21/">Linked-In</a></td>
  </tr>

</table>

