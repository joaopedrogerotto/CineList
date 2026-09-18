import type { Movie } from "../types/Movie";

export const movies: Movie[] = [
    {
        id: 1,
        title: "Interestelar",
        genre: "Ficção Científica",
        year: 2014,
        rating: 8.7,
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "Em um futuro em que a Terra está se tornando inabitável, um grupo de astronautas parte em uma missão pelo espaço em busca de um novo planeta capaz de abrigar a humanidade.",
        favorite: false
    },
    {
        id: 2,
        title: "O Poderoso Chefão",
        genre: "Drama",
        year: 1972,
        rating: 9.2,
        image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        description: "A história da família Corleone, uma das mais poderosas famílias da máfia italiana em Nova York, acompanhando a transformação de Michael Corleone dentro dos negócios da família.",        

        favorite: false
    },
    {
        id: 3,
        title: "Batman: O Cavaleiro das Trevas",
        genre: "Ação",
        year: 2008,
        rating: 9.0,
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman enfrenta uma das maiores ameaças de Gotham quando o Coringa surge e começa a espalhar o caos pela cidade, colocando o herói diante de escolhas cada vez mais difíceis.",        

        favorite: true
    },
    {
        id: 4,
        title: "Pulp Fiction",
        genre: "Crime",
        year: 1994,
        rating: 8.9,
        image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        description: "Diversas histórias envolvendo criminosos, assassinos, lutadores e figuras do submundo de Los Angeles se cruzam em uma narrativa não linear marcada pelo humor ácido e pela violência.",        
        favorite: true
    },
    {
        id: 5,
        title: "A Origem",
        genre: "Ficção Científica",
        year: 2010,
        rating: 8.8,
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "Dom Cobb é especialista em invadir os sonhos das pessoas para roubar informações. Ele recebe uma missão diferente: implantar uma ideia na mente de um alvo.",        
        favorite: true
    },
    {
        id: 6,
        title: "Forrest Gump",
        genre: "Drama",
        year: 1994,
        rating: 8.8,
        image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        description: "Forrest Gump, um homem simples e de grande coração, acaba participando de importantes acontecimentos da história dos Estados Unidos enquanto vive uma jornada marcada pelo amor, amizade e superação.",       
        favorite: false
    },
    {
        id: 7,
        title: "Matrix",
        genre: "Ficção Científica",
        year: 1999,
        rating: 8.7,
        image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "Neo descobre que a realidade em que vive é uma poderosa simulação criada por máquinas e precisa decidir se está disposto a conhecer a verdade e lutar pela liberdade da humanidade.",        
        favorite: true
    },
    {
        id: 8,
        title: "O Senhor dos Anéis: O Retorno do Rei",
        genre: "Fantasia",
        year: 2003,
        rating: 9.0,
        image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        description: "Enquanto Frodo e Sam se aproximam de Mordor para destruir o Um Anel, Aragorn e seus aliados enfrentam o exército de Sauron na batalha decisiva pela Terra-média.",        
        favorite: false
    },
    {
        id: 9,
        title: "Clube da Luta",
        genre: "Drama",
        year: 1999,
        rating: 8.8,
        image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        description: "Um homem insatisfeito com sua vida conhece o misterioso Tyler Durden, e os dois criam um clube secreto de luta que rapidamente se transforma em algo muito maior e mais perigoso.",        
        favorite: false
    },
    {
        id: 10,
        title: "Vingadores: Ultimato",
        genre: "Ação",
        year: 2019,
        rating: 8.3,
        image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        description: "Após os acontecimentos devastadores de Guerra Infinita, os Vingadores restantes precisam encontrar uma maneira de reverter as ações de Thanos e trazer de volta aqueles que desapareceram.",        
        favorite: false
    },
    {
        id: 11,
        title: "Homem-Aranha: No Aranhaverso",
        genre: "Animação",
        year: 2018,
        rating: 8.4,
        image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        description: "Miles Morales se torna o Homem-Aranha e acaba descobrindo que existem outras versões do herói vindas de diferentes dimensões. Juntos, eles precisam impedir uma ameaça que pode destruir seus universos.",        
        favorite: true
    },
    {
        id: 12,
        title: "O Rei Leão",
        genre: "Animação",
        year: 1994,
        rating: 8.5,
        image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        description: "Simba é um jovem leão destinado a se tornar rei, mas precisa enfrentar a perda de seu pai e retornar às suas origens para recuperar o lugar que lhe pertence.",        
        favorite: false
    },
    {
        id: 13,
        title: "Toy Story",
        genre: "Animação",
        year: 1995,
        rating: 8.3,
        image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        description: "Woody é o brinquedo favorito de Andy até a chegada de Buzz Lightyear. A rivalidade entre os dois acaba dando lugar a uma grande amizade quando eles precisam enfrentar uma série de aventuras.",        
        favorite: false
    },
    {
        id: 14,
        title: "Gladiador",
        genre: "Ação",
        year: 2000,
        rating: 8.5,
        image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        description: "Após ser traído e perder sua família, o general romano Maximus é escravizado e se torna um gladiador. Determinado a buscar justiça, ele enfrenta o poderoso imperador Commodus.",        
        favorite: true
    },
    {
        id: 15,
        title: "O Iluminado",
        genre: "Terror",
        year: 1980,
        rating: 8.4,
        image: "https://image.tmdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg",
        description: "Jack Torrance aceita trabalhar como zelador de um isolado hotel durante o inverno, levando sua esposa e seu filho. Com o passar do tempo, forças sobrenaturais começam a afetar sua mente.",
        favorite: false
    }
];