<!-- Modal de login-->
<div id="registerModal" class="modal">
    <div class="modal-content">
            <span class="close">&times;</span>
            <form  id="registerFormLogin" class="registerlogin"  method="POST" >
            @csrf
                <h2>Login</h2>
                <div class="input-group">
                <input type="text" id="idNome" name="name" placeholder="Nome do Usúario" required>
                <i class="fas fa-user"></i>
                </div>
                <div class="input-group">
                    <input type="password" id="idSenha" name="password" placeholder="Senha" required>
                    <i class="fas fa-lock"></i>
                </div>
                <span id="showPasswordBtn">Esqueceste a senha?</span>
                <div class="button-group">
                    <button type="submit" id="EnterBtn">Entrar</button>
                    <button type="button"  id="showRegisterFormBtn">Criar Conta</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Modal de Registro -->
<div id="registerFormModal" class="modal" >
    <div class="modal-content">
        <span class="close">&times;</span>
        <form  id="registerFormRegister" class="register" method="POST" >
            @csrf
            <h2>Registre-se</h2>
            <div class="container">
                <div class="input-group">
                    <input type="text" id="idNomeregister" name="name" placeholder="Nome de Usuário" required>
                    <i class="fas fa-user"></i>
                </div>
                <div class="input-group">
                    <select id="gender" name="gender" required>
                        <option value="" disabled selected>Selecione o Gênero</option>
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                    </select>
                </div>
                <div class="input-group">
                    <input type="date" id="idDataNascimento" name="date_of_birth" required>
                </div>
                <div class="input-group">
                    <input type="email" id="idEmailregister" name="email" placeholder="Email" required>
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="input-group">
                    <input type="password" id="idSenharegister" name="password" placeholder="Senha" required>
                    <i class="fas fa-lock"></i>
                </div>
                <div class="input-group">
                    <input type="password" id="idConfSenha" name="password_confirmation" placeholder="Confirmação de Senha" required>
                    <i class="fas fa-lock"></i>
                </div>
            </div>
            <div class="button-group">
                <button type="submit" id="createAccountBtn">Criar Conta</button>
                <button type="button" class="back-button">Fazer Login</button>
            </div>
        </form>
    </div>
</div>
<!-- Modal de Esqueceu a Senha -->
<div id="forgotPasswordModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <form id="forgotPasswordForm">
            <h2>Problemas ao iniciar sessão?</h2>
            <div class="conteudo">
                <p>Insere o teu e-mail para encontrarmos a tua conta.</p>
            </div>
            <div class="container">
                <div class="input-group">
                    <input type="email" placeholder="Email" name="email" id="emailResert" required>
                    <i class="fas fa-envelope"></i>
                </div>
            </div>
            <div class="button-group">
                <button type="button" id="nextToInsertEmailBtn">Avançar</button>
                <button type="button" class="back-button">Voltar</button>
            </div>
        </form>
    </div>
</div>
<!-- Modal de Inserção de Nova Senha -->
<div id="insertNewPasswordModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <form id="insertNewPasswordForm">
            <h2>Recuperar Conta</h2>
            <div class="container">
                <div class="input-group">
                    <input type="password" placeholder="Nova Senha" id="NewSenha"  required>
                    <i class="fas fa-lock"></i>
                </div>
                <div class="input-group">
                    <input type="password" placeholder="Confirmação de Senha" id="NewSenhaConf" required>
                    <i class="fas fa-lock"></i>
                </div>
            </div>
            <div class="button-group">
                <button type="button" id="nextToConfirmCodeBtn">Avançar</button>
            </div>
        </form>
    </div>
</div>

<!-- Modal de Confirmação do Código de Confirmação -->
<div id="confirmCodeModal" class="modal" >
    <div class="modal-content">
        <span class="close">&times;</span>
        <form  id="confirmCodeForm" method="POST" >
        @csrf
            <h2>Código de Verificação</h2>
            <div class="conteudo">
                <p>Enviamo o código de confirmação para to...@gmail.com.Verifica o seu email.</p>
            </div>
            <div class="container">
                <div class="input-group Codigo-Digitado" id="CodigoDigitado">
                    <input type="text" placeholder="0" maxlength="1" required>
                    <input type="text" placeholder="0" maxlength="1" required>
                    <input type="text" placeholder="0" maxlength="1" required>
                    <input type="text" placeholder="0" maxlength="1" required>
                </div>
                <div class="progress">
                    <span id="codigoEnviado">O teu código foi enviado. Aguarde...</span>
                </div>
            </div>
            <div class="button-group">
                <button type="submit" id="confirmarcodigo">Avançar</button>
                <button type="button" id="pedirNovoCodigoBtn">Pedir Novo Codigo de Confirmação</button>
            </div>
        </form>
    </div>
</div>

<!-- Modal de Confirmação do Código de Confirmação para esqueceu senha -->
<div id="confirmCodeModalSenha" class="modal" >
    <div class="modal-content">
        <span class="close">&times;</span>
        <form  id="confirmCodeFormSanha" method="POST" >
        @csrf
            <h2>Código de Verificação</h2>
            <div class="conteudo">
                <p>Enviamo o código de confirmação para to...@gmail.com.Verifica o seu email.</p>
            </div>
            <div class="container">
                <div class="input-group Codigo-Digitados" id="CodigoDigitadoSenha">
                    <input type="text" placeholder="0" maxlength="1" required>
                    <input type="text" placeholder="0" maxlength="1" required>
                    <input type="text" placeholder="0" maxlength="1" required>
                    <input type="text" placeholder="0" maxlength="1" required>
                </div>
                <div class="progress">
                    <span id="codigoEnviadoSenha">O teu código foi enviado. Aguarde...</span>
                </div>
            </div>
            <div class="button-group">
                <button type="submit" id="confirmarcodigoSenha">Avançar</button>
                <button type="button" id="pedirNovoCodigoBtnSenha">Pedir Novo Codigo de Confirmação</button>
            </div>
        </form>
    </div>
</div>

<!-- Modal de loginAuth-->
<div id="registerModalResert" class="modal">
    <div class="modal-content">
            <span class="close">&times;</span>
            <form  id="registerFormResert" class="registerlogin"  method="POST" >
            @csrf
                <h2>Entra Com sua Nova Senha!</h2>
                <div class="input-group">
                <input type="text" id="idNomeResert" name="name" placeholder="Nome do Usúario" required>
                <i class="fas fa-user"></i>
                </div>
                <div class="input-group">
                    <input type="password" id="idSenhaResert" name="password" placeholder="Senha" required>
                    <i class="fas fa-lock"></i>
                </div>
                <div class="button-group">
                    <button type="submit" id="EnterBtnResert">Entrar</button>
                </div>
            </form>
        </div>
    </div>
</div>

<div id="codigoModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Confirmação de E-mail</h2>
        <p>Insira o código de confirmação enviado para o novo e-mail:</p>
        <input type="text" placeholder="0" id="codigoVerificacaoInput1" maxlength="1">
        <input type="text" placeholder="0" id="codigoVerificacaoInput2" maxlength="1">
        <input type="text" placeholder="0" id="codigoVerificacaoInput3" maxlength="1">
        <button id="confirmarCodigoBtn">Confirmar</button>
    </div>
</div>

