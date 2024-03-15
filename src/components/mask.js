//999.999.999-99
export function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '')
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
    cpf = cpf.replace(/(\d{3})(\d{1,2})/, '$1-$2')
    cpf = cpf.replace(/(-\d{2})\d+?$/, '$1')

    return cpf;
}
//99.999.999-X
// export function formatarRG(rg){
//     return value
//         .replace(/(\d{2})(\d)/, '$1.$2')
//         .replace(/(\d{3})(\d)/, '$1.$2')
//         .replace(/(\d{3})(\d{1,2})/, '$1-$2')
//         .replace(/(-\d{1})\d+?$/, '$1')
// }
// //(11) 99999-9999
// export function formatarCel(cel){
//     return value
//             .replace(/(\d{2})(\d)/, '($1) $2')
//             .replace(/(\d{5})(\d)/, '$1-$2')
//             .replace(/(\d{4})(\d{1,2})/, '$1-$2')
//             .replace(/(-\d{1})\d+?$/, '$1')
// }