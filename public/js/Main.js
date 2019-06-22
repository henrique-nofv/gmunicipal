var http = new HttpService();

http.get('/historico-guarda/json').
            then(snapshot => {
                var gMunicipal = new GuardaMunicipal(snapshot);

                qtdCentro = gMunicipal.atendimentoCentro;

                console.log(qtdCentro);


                google.charts.load('current', { 'packages': ['corechart'] });

                function desenharGraficos() {

                    var grafico = new Graficos();

                    //GRAFICO DE PIZZA
                    grafico.pizza(gMunicipal.chamadosCentro, 
                                gMunicipal.chamadosCidadeIndustrial, 
                                gMunicipal.chamadosCajuru, 
                                gMunicipal.chamadosSitioCercado, 
                                gMunicipal.chamadosBoqueirao, 
                                gMunicipal.chamadosSaoFrancisco, 
                                gMunicipal.chamadosAltoBoqueirao, 
                                gMunicipal.chamadosBoaVista, 
                                gMunicipal.chamadosJardimBotanico,
                                gMunicipal.chamadosTatuquara);

                    //GRAFICO DE LINHA
                    grafico.linha(gMunicipal.chamados2015, 
                                gMunicipal.chamados2016, 
                                gMunicipal.chamados2017, 
                                gMunicipal.chamados2018)
                                
                    //GRAFICO DE COLUNA
                    grafico.coluna(gMunicipal.chamadosApoio,
                                    gMunicipal.chamadosDano,
                                    gMunicipal.chamadosAbordagem,
                                    gMunicipal.chamadosRoubo,
                                    gMunicipal.chamadosSubsIlicita,
                                    gMunicipal.chamadosInvasao,
                                    gMunicipal.chamadosAtitudeSuspeita,
                                    gMunicipal.chamadosPertubacao,
                                    gMunicipal.chamadosAmeaca,
                                    gMunicipal.chamadosTransito,
                                    gMunicipal.chamadosFurto,
                                    gMunicipal.chamadosAgressao,
                                    gMunicipal.chamadosAlarmes,
                                    gMunicipal.chamadosAnimais,
                                    gMunicipal.chamadosViolacaoMariaPenha);

                };;
                google.charts.setOnLoadCallback(desenharGraficos);
            })
            .catch(erro => { throw new Error(erro)});


