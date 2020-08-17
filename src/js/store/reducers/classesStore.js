const SKILLS_CLASSES = {
    classes: [
        {
            class: 'Cavaleiro',
            skillClass: {
                skillName: 'Nobreza Diplomatica',
                skillDescription: 'nivel 1~3 oferece vantagens por sua posição social'
            },
            classDescription: 'Guerreiro nomeado pelo rei Bruxo para Servir nas defesas do Reino',
            equipamento: 'Armadura pesada e Espada de duas Mãos',
        },
        {
            class: 'Arqueiro',
            skillClass: {
                skillName: 'Conhecimento da Floresta',
                skillDescription: 'nivel 1~3 oferece vantagens ao andar por florestas'
            },
            classDescription: 'Um andarilho que viveu nas florestas de Esgal',
            equipamento: 'Roupas leves de couro e um arco',
        },
        {
            class: 'Sacerdote',
            skillClass: {
                skillName: 'Grimorio Sagrado',
                skillDescription: 'nivel 1~3 oferece conhecimentos de Historia e Religião'
            },
            classDescription: 'Acólito nomeado pelo rei Bruxo para Servir nas defesas do Reino',
            equipamento: 'Armadura leve e uma maça',
        },
        {
            class: 'Ladrão',
            skillClass: {
                skillName: 'Malandragem das Ruas',
                skillDescription: 'nivel 1~3 oferece experiencias da vida na cidade'
            },
            classDescription: 'Gatuno que viveu toda sua vida nos becos de Lonn',
            equipamento: 'Armadura leve e uma adaga',
        },
        {
            class: 'Monge',
            skillClass: {
                skillName: 'Grimorio Sagrado',
                skillDescription: 'nivel 1~3 oferece conhecimentos de Historia e Religião'
            },
            classDescription: 'Antigo acólito nomeado pelo rei Bruxo para Servir nas defesas do Reino',
            equipamento: 'Roupas leves',
        },

        {
            class: 'Mago',
            skillClass: {
                skillName: 'Grimorio Arcano',
                skillDescription: 'nivel 1~3 oferece conhecimentos da Magia'
            },
            classDescription: 'Sábio que estudou na univercidade de Lonn e obteve conhecimento Arcano',
            equipamento: 'Roupas leves e um cajado',
        },
    ],
    skills: [
        {
            skilName: 'Furia',
            skillDescription: 'Super da força momentanea, mas fica cansado o resto do dia',
            skillAtribute: 'fisico'
        }, {
            skilName: 'Lamina Vorpal',
            skillDescription: 'Tecnica retalhadora de inimigos',
            skillAtribute: 'fisico'
        }, {
            skilName: 'Chama de Shinari',
            skillDescription: 'Super da força momentanea, mas fica cansado o resto do dia',
            skillAtribute: 'fisico'
        }, {
            skilName: 'Escudo de Shinari',
            skillDescription: 'Conjura um escudo divino protetor',
            skillAtribute: 'fisico'
        }, {
            skilName: 'Clone',
            skillDescription: 'Cria clone com metade de sua força',
            skillAtribute: 'fisico'
        }, {
            skilName: 'Cura',
            skillDescription: 'Super da força momentanea, mas fica cansado o resto do dia',
            skillAtribute: 'divino'
        }, {
            skilName: 'Fortaleza',
            skillDescription: 'Aumenta a resistencia de um corpo ou objeto',
            skillAtribute: 'divino'
        }, {
            skilName: 'Exorcismo',
            skillDescription: 'Exconjura criaturas sombrias',
            skillAtribute: 'divino'
        }, {
            skilName: 'Terreno Divino',
            skillDescription: 'Cria uma area de Cura, afasta criaturas sombrias e insetiva falar a verdade',
            skillAtribute: 'divino'
        }, {
            skilName: 'Remover o mal',
            skillDescription: 'Remove doenças, maldições, mau estar e azía',
            skillAtribute: 'divino'
        }, {
            skilName: 'Flecha de Shinari',
            skillDescription: 'Disparo Divino que puveriza criaturas sombrias',
            skillAtribute: 'divino'
        }, {
            skilName: 'Ressucitar',
            skillDescription: 'Ressucita uma pessoa',
            skillAtribute: 'divino'
        }, {
            skilName: 'Passo de Shinari',
            skillDescription: 'Movimentação de alta velocidade',
            skillAtribute: 'divino'
        }, {
            skilName: 'Punho de Shinari',
            skillDescription: 'Golpe pulverizador de criaturas sombrias',
            skillAtribute: 'divino'
        }, {
            skilName: 'Punho de Shinaro',
            skillDescription: 'Golpe divino no alge do plano fisico/espiritual, mas fica exausto o resto do dia',
            skillAtribute: 'divino'
        }, {
            skilName: 'Pele de Ferro',
            skillDescription: 'Resistencia fisica aumentada',
            skillAtribute: 'divino'
        }, {
            skilName: 'Força de Shinari',
            skillDescription: 'Super força até o fim do combate',
            skillAtribute: 'divino'
        }, {
            skilName: 'Bola de Fogo',
            skillDescription: 'Conjura uma bola de fogo',
            skillAtribute: 'magico'
        }, {
            skilName: 'Escudo magico',
            skillDescription: 'Cria um escudo Magico',
            skillAtribute: 'magico'
        },
        {
            skilName: 'Desfazer Magia',
            skillDescription: 'Desfaz uma magia',
            skillAtribute: 'magico'
        }, {
            skilName: 'Dedectar magia',
            skillDescription: 'Dedecta e analiza magia',
            skillAtribute: 'magico'
        }, {
            skilName: 'Drenar vida',
            skillDescription: 'Drena ou da vida ao toque',
            skillAtribute: 'magico'
        }, {
            skilName: 'Metamorfose',
            skillDescription: 'Se transforma em animais',
            skillAtribute: 'magico'
        }, {
            skilName: 'Parede de Gelo',
            skillDescription: 'Conjura Barreira de Gelo',
            skillAtribute: 'magico'
        }, {
            skilName: 'Flecha Arcana',
            skillDescription: 'Poderosa flecha que possui energia arcana condensada',
            skillAtribute: 'magico'
        }, {
            skilName: 'Manipular sombra',
            skillDescription: 'Manipula forma, textura e solides da sombra',
            skillAtribute: 'magico'
        },{
            skilName:'Manipular agua',
            skillDescription:'Manipula forma, textura e solides da agua',
            skillAtribute:'magico'
        },{
            skilName:'Manipular fogo',
            skillDescription:'Manipula forma, textura e solides da fogo',
            skillAtribute:'magico'
        },{
            skilName:'Campo Gravitacional',
            skillDescription:'Manipula a gravidade de uma area',
            skillAtribute:'magico'
        },{
            skilName:'Parede de Fogo',
            skillDescription:'Cria uma parede de fogo',
            skillAtribute:'magico'
        },{
            skilName:'Explosão',
            skillDescription:'Conjura uma poderosa explosão vindo dos céus',
            skillAtribute:'magico'
        },{
            skilName:'Drenar Magia',
            skillDescription:'Absorve energia magica pelo toque',
            skillAtribute:'magico'
        },{
            skilName:'Nuvem Acida',
            skillDescription:'Conjura fumaça acida',
            skillAtribute:'magico'
        },{
            skilName:'Herbologia',
            skillDescription:'1: Conhecer  2:Usar  3:Encontrar ',
            skillAtribute:'geral'
        },{
            skilName:'Alquimia',
            skillDescription:'1: p.Cura p.Mana 2:p.Fortalecimento p.Adrenalina 3:p.Acido p.fogo-vivo',
            skillAtribute:'geral'
        },{
            skilName:'Engenharia',
            skillDescription:'1:Entender   2:Replicar   3: Criar',
            skillAtribute:'geral'
        },{
            skilName:'Rastreio',
            skillDescription:'1:Achar pista   2:sentir   3:Instinto',
            skillAtribute:'geral'
        },{
            skilName:'Criar Armadilha',
            skillDescription:'1:Pequenas   2:Medias   3:Grandes',
            skillAtribute:'geral'
        },{
            skilName:'Interrogatorio',
            skillDescription:'1:Intimidação  2:Blefe  3:Confiança',
            skillAtribute:'geral'
        },{
            skilName:'Roubar',
            skillDescription:'1:Bater carteira  2:Bater Bolsa  3:Esconder Objeto',
            skillAtribute:'geral'
        },{
            skilName:'Pericia em Veneno',
            skillDescription:'1:Criar  2:Usar  3:Antidotos',
            skillAtribute:'geral'
        },{
            skilName:'Nuvem de Fumaça',
            skillDescription:'1:Ao redor(2m)  2:Ao redor(5m)  3:Arremeça(10m)',
            skillAtribute:'geral'
        },{
            skilName:'Dedectar Armadilhas',
            skillDescription:'1:Simples  2:Mecanismos  3:Magicos',
            skillAtribute:'geral'
        },{
            skilName:'Invisibilidade',
            skillDescription:'1:Parado  2:Esgueirando  3:Andando',
            skillAtribute:'geral'
        },{
            skilName:'Lábia',
            skillDescription:'1:Mentira 2:Blefe  3:Confiança',
            skillAtribute:'geral'
        },
    ]
}

export default function classesStore(state = SKILLS_CLASSES, action) {

    return state
}