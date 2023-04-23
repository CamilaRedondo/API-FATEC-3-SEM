import React, { Component, FormEvent, ChangeEvent } from 'react';
import Styles from  '../UserForm/UserForm.module.css';
import InputText from '../../components/InputText/InputText';

interface UserFormFormState {
  nomeCompleto : string;
  cpf : string;
  nomeDoUsuario : string;
  tipoDoUsuario : string;
  email : string;
  senha : string
  confirmarSenha : string;
}

interface UserFormFormProps {
  onSubmit: (nomeCompleto: string,
             cpf : string,
             nomeDoUsuario : string,
             tipoDoUsuario : string,
             email : string,
             senha : string,
             confirmarSenha : string ) => void;
}

class UserForm extends Component<UserFormFormProps, UserFormFormState> {
  constructor(props: UserFormFormProps) {
    super(props);
    this.state = {
      nomeCompleto: '',
      cpf: '',
      nomeDoUsuario: '',
      tipoDoUsuario: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    };
  }

  handleNomeCompletoChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ nomeCompleto: event.target.value });
  };

  handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ cpf: event.target.value });
  };

  handleNomeDoUsuarioChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ nomeDoUsuario: event.target.value });
  };

  handleTipoDoUsuarioChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ tipoDoUsuario: event.target.value });
  };

  handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handleSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ senha: event.target.value });
  };

  handleConfirmarSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ confirmarSenha: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { nomeCompleto,
            cpf,
            nomeDoUsuario,
            tipoDoUsuario,
            email,
            senha,
            confirmarSenha
          } = this.state;

    this.props.onSubmit(nomeCompleto, cpf, nomeDoUsuario, tipoDoUsuario, email, senha, confirmarSenha);
  };

  render() {
    const { nomeCompleto,
            cpf,
            nomeDoUsuario,
            tipoDoUsuario,
            email,
            senha,
            confirmarSenha
          } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={Styles.container}>
          <div className={Styles.nomeCompleto}>
          <label>Nome completo</label>
          <InputText
            value={nomeCompleto}
            onChange={this.handleNomeCompletoChange}
            placeholder="Insira o nome completo"
            mytype="text"
            />
          </div>
          <div className={Styles.cpf}>
          <label >CPF</label>
          <InputText
            value={cpf}
            onChange={this.handleCpfChange}
            placeholder="Insira o CPF"
            mytype="text"
            />
          </div>
          <div className={Styles.nomeDoUsuario}>
          <label >Nome de usuário</label>
          <InputText
            value={nomeDoUsuario}
            onChange={this.handleNomeDoUsuarioChange}
            placeholder="Insira o nome de usuário"
            mytype="text"
            />
          </div>
          <div className={Styles.email}>
          <label >Email</label>
          <InputText
            value={email}
            onChange={this.handleEmailChange}
            placeholder="Insira o email"
            mytype="email"
            />
          </div>
          <div className={Styles.senha}>
          <label >Senha</label>
          <InputText
            value={senha}
            onChange={this.handleSenhaChange}
            placeholder="Insira a senha"
            mytype="password"
            />
          </div>
          <div className={Styles.confirmarSenha}>
          <label >Confirmar a senha</label>
          <InputText
            value={confirmarSenha}
            onChange={this.handleConfirmarSenhaChange}
            placeholder="Confirme a senha"
            mytype="password"
            />
          </div>
          <div className={Styles.tipoDoUsuario}>
          <label >Tipo de usuário</label>
          <br></br>
          <select className={Styles.comboBox} name="userType" required id="userType">
              <option value="0">Administrador</option>
              <option value="1">Usuário</option>
          </select>
          </div>
          <div className={Styles.botao}>
            <button className={Styles.button}>Salvar</button>
          </div>
        </div>
      </form>
    );
  }
}

export default UserForm;







