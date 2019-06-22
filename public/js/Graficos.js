class Graficos{

    pizza(qtdCentro, qtdCidadeIndustrial, qtdCajuru, qtdSitioCercado, qtdBoqueirao, qtdSaoFrancisco, qtdAltoBoqueirao, qtdBoaVista, qtdJardimBotanico, qtdTatuquara){
                let tabela = new google.visualization.DataTable();
                tabela.addColumn('string', 'Categoria');
                tabela.addColumn('number', 'Valor');
                tabela.addRows([
                    ['CENTRO', qtdCentro],
                    ['CIDADE INDUSTRIAL', qtdCidadeIndustrial],
                    ['CAJURU', qtdCajuru],
                    ['SITIO CERCADO', qtdSitioCercado],
                    ['BOQUEIRAO', qtdBoqueirao],
                    ['SÃO FRANCISCO', qtdSaoFrancisco],
                    ['ALTO BOQUEIRAO', qtdAltoBoqueirao],
                    ['BOA VISTA', qtdBoaVista],
                    ['JARDIM BOTANICO', qtdJardimBotanico],
                    ['TATUQUARA', qtdTatuquara]
                ]);

                var formatoGrafico = {
                    title: 'TOP 10 - CHAMADOS POR BAIRROS | Parcial 2019',
                    height: 700,
                    width: 1200,
                    is3D: true,
                    legend: 'labeled',
                    pieSliceText: 'value',
                    slices: {
                        0: { offset: 0.1 }
                    }
                }
                "pieHole: 0.4 - abre um buraco no grafico de pizza"
                let grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
                return grafico.draw(tabela, formatoGrafico);
    }

    linha(qtd2015, qtd2016, qtd2017, qtd2018){
        let tabela = new google.visualization.DataTable();
                tabela.addColumn('string', 'Ano');
                tabela.addColumn('number', 'Quantidade');
                tabela.addRows([
                    ['2015', qtd2015],
                    ['2016', qtd2016],
                    ['2017', qtd2017],
                    ['2018', qtd2018],
                ]);
                var opcoes = {
                    title: 'CHAMADOS ABERTOS NA GUARDA MUNICIPAL | 2015 - 2018',
                    width: 1200,
                    height: 700,
                }


                let grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
            return grafico.draw(tabela, opcoes);
    }

    coluna(qtdApoio,qtdDano,qtdAbordagem,qtdRoubo,qtdSubsIlicita,qtdInvasao,qtdAtitudeSuspeita,qtdPertubacao,qtdAmeaca,qtdTransito,qtdFurto,qtdAgressao,qtdAlarmes,qtdAnimais,qtdViolacaoMariaPenha){
        let tabela = google.visualization.arrayToDataTable(
                    [
                        ['Registros', 'Quantidade'],
                        ['APOIO', qtdApoio],
                        ['DANO', qtdDano],
                        ['ABORDAGEM', qtdAbordagem],
                        ['ROUBO', qtdRoubo],
                        ['SUBSTANCIA ILICITA', qtdSubsIlicita],
                        ['INVASAO', qtdInvasao],
                        ['ATITUDE SUSPEITA', qtdAtitudeSuspeita],
                        ['PERTUBACAO', qtdPertubacao],
                        ['AMEAÇA', qtdAmeaca],
                        ['TRANSITO', qtdTransito],
                        ['FURTO', qtdFurto],
                        ['AGRESSAO', qtdAgressao],
                        ['ALARME', qtdAlarmes],
                        ['ANIMAIS', qtdAnimais],
                        ['MARIA DA PENHA', qtdViolacaoMariaPenha],

                    ]);

                var opcoes = {

                    title: 'TOP 15 - REGISTROS GUARDA MUNICIPAL POR NATUREZA | 2015-2019',
                    width: 1200,
                    height: 700,
                    vAxis: {
                        gridlines: { color: 'transparent' },
                        format: 'currency',
                        title: 'MOTIVOS'
                    },
                    hAxis: {
                        title: 'REGISTROS'
                    }
                }


                let grafico = new google.visualization.BarChart(
                document.getElementById('graficoColuna'));
                grafico.draw(tabela, opcoes);

    }
}