enum Cargo {
    Atriz,
    Padeiro
}

type Cidadao = {
    nome: string,
    idade: number,
    profissao: Cargo
}

let pessoa1: Cidadao = {
    nome: 'maria',
    idade: 29,
    profissao: Cargo.Atriz
};

let pessoa2: Cidadao = {
    nome: 'roberto',
    idade: 19,
    profissao: Cargo.Padeiro
};

let pessoa3: Cidadao = {
    nome: 'laura',
    idade: 32,
    profissao: Cargo.Atriz
};

let pessoa4: Cidadao = {
    nome: "carlos",
    idade: 19,
    profissao: Cargo.Padeiro
}