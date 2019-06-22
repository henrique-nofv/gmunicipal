
class GuardaMunicipal{
    constructor(objetoJson){
        this._objetoJson = objetoJson;
    }

    get chamadosCentro(){
        let qtdCentro = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'CENTRO') {
                qtdCentro += 1;
            }
        }
        return qtdCentro;
    }

    get chamadosCidadeIndustrial(){
        let qtdCidadeIndustrial = 0;
        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'CIDADE INDUSTRIAL') {
                qtdCidadeIndustrial += 1;
            }
        }
        return qtdCidadeIndustrial;
    }

    get chamadosCajuru(){
        let qtdCajuru = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'CAJURU') {
                qtdCajuru += 1;
            }
        }
        return qtdCajuru;
    }

    get chamadosSitioCercado(){
        let qtdSitioCercado = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'SÍTIO CERCADO') {
                qtdSitioCercado += 1;
            }
        }
        return qtdSitioCercado;
    }

    get chamadosBoqueirao(){
        let qtdBoqueirao = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'BOQUEIRÃO') {
                qtdBoqueirao += 1;
            }
        }
        return qtdBoqueirao;
    }

    get chamadosSaoFrancisco(){
        let qtdSaoFrancisco = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'SÃO FRANCISCO') {
                qtdSaoFrancisco += 1;
            }
        }
        return qtdSaoFrancisco;
    }

    get chamadosAltoBoqueirao(){
        let qtdAltoBoqueirao = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'ALTO BOQUEIRÃO') {
                qtdAltoBoqueirao += 1;
            }
        }
        return qtdAltoBoqueirao;
    }

    get chamadosBoaVista(){
        let qtdBoaVista = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'BOA VISTA') {
                qtdBoaVista += 1;
            }
        }
        return qtdBoaVista;
    }

    get chamadosJardimBotanico(){
        let qtdJardimBotanico = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'JARDIM BOTÂNICO') {
                qtdJardimBotanico += 1;
            }
        }
        return qtdJardimBotanico;
    }

    get chamadosTatuquara(){
        let qtdTatuquara = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_BAIRRO_NOME == 'TATUQUARA') {
                qtdTatuquara += 1;
            }
        }
        return qtdTatuquara;
    }

    get chamados2015(){
        let qtd2015 = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_ANO == "2015") {
                qtd2015 += 1;;
            }
        }
        return qtd2015;
    }

    get chamados2016(){
        let qtd2016 = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_ANO == "2016") {
                qtd2016 += 1;;
            }
        }
        return qtd2016;
    }

    get chamados2017(){
        let qtd2017 = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_ANO == "2017") {
                qtd2017 += 1;;
            }
        }
        return qtd2017;
    }

    get chamados2018(){
        let qtd2018 = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].ATENDIMENTO_ANO == "2018") {
                qtd2018 += 1;;
            }
        }
        return qtd2018;
    }

    get chamadosApoio(){
        let qtdApoio = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Apoio") {
                qtdApoio += 1;
            }
        }
        return qtdApoio;
    }

    get chamadosDano(){
        let qtdDano = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Dano") {
                qtdDano += 1;
            }
        }
        return qtdDano;
    }

    get chamadosAbordagem(){
        let qtdAbordagem = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Abordagem") {
                qtdAbordagem += 1;
            }
        }
        return qtdAbordagem;
    }

    get chamadosRoubo(){
        let qtdRoubo = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Roubo") {
                qtdRoubo += 1;
            }
        }
        return qtdRoubo;
    }

    get chamadosSubsIlicita(){
        let qtdSubsIlicita = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Substância Ilícita") {
                qtdSubsIlicita += 1;
            }
        }
        return qtdSubsIlicita;
    }

    get chamadosInvasao(){
        let qtdInvasao = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Invasão") {
                qtdInvasao += 1;
            }
        }
        return qtdInvasao;
    }

    get chamadosAtitudeSuspeita(){
        let qtdAtitudeSuspeita = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Atitude suspeita") {
                qtdAtitudeSuspeita += 1;;
            }
        }
        return qtdAtitudeSuspeita;
    }

    get chamadosPertubacao(){
        let qtdPertubacao = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Perturbação do sossego") {
                qtdPertubacao += 1;
            }
        }
        return qtdPertubacao;
    }

    get chamadosAmeaca(){
        let qtdAmeaca = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Ameaça") {
                qtdAmeaca += 1;
            }
        }
        return qtdAmeaca;
    }

    get chamadosTransito(){
        let qtdTransito = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Trânsito") {
                qtdTransito += 1;
            }
        }
        return qtdTransito;
    }

    get chamadosFurto(){
        let qtdFurto = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Furto") {
                qtdFurto += 1;
            }
        }
        return qtdFurto;
    }

    get chamadosAgressao(){
        let qtdAgressao = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Agressão física/verbal") {
                qtdAgressao += 1;
            }
        }
        return qtdAgressao;
    }

    get chamadosAlarmes(){
        let qtdAlarmes = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Alarmes") {
                qtdAlarmes += 1;
            }
        }
        return qtdAlarmes;
    }

    get chamadosAnimais(){
        let qtdAnimais = 0;

        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Animais") {
                qtdAnimais += 1;
            }
        }
        return qtdAnimais;
    }

    get chamadosAnimais(){
        let qtdViolacaoMariaPenha = 0;
        
        for (var i = 1, len = Object.keys(this._objetoJson).length; i < len; i++) {
            if (this._objetoJson[i].NATUREZA1_DESCRICAO == "Violação de Medida Protetiva Lei Maria da Penha") {
                qtdViolacaoMariaPenha += 1;
            }
        }
        return qtdViolacaoMariaPenha;
    }

}