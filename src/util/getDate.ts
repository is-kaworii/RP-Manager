export function getDate(): {
    date: Date;
    string: string;
} {
    // define o fuso horário do brasil (gmt -3)
    const timezoneOffset = -3 * 60 * 60 * 1000

    // cria um objeto Date com a hora atual
    const date = new Date()

    // ajusta a hora para o fuso horário do Brasil
    date.setTime(date.getTime() + timezoneOffset)

    const dia = date.getDate().toString().padStart(2, '0')
    const mes = (date.getMonth() + 1).toString().padStart(2, '0')
    const ano = date.getFullYear();
    const hora = date.getHours().toString().padStart(2, '0');
    const minuto = date.getMinutes().toString().padStart(2, '0');
    const segundo = date.getSeconds().toString().padStart(2, '0');

    return {
        date: date,
        string: `${dia}-${mes}-${ano} ${hora}:${minuto}:${segundo}`
    };
} 