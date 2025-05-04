import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, email, assunto, mensagem } = body;

        if (!nome || !email || !assunto || !mensagem) {
            return NextResponse.json(
                { error: "Todos os campos são obrigatórios" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'juanvitorrostirola666@gmail.com',
            replyTo: email,
            subject: `Contato do Portfólio: ${assunto}`,
            text: `
        Nome: ${nome}
        Email: ${email}
        Assunto: ${assunto}
        
        Mensagem:
        ${mensagem}
      `,
            html: `
        <h3>Nova mensagem do formulário de contato</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json(
            { error: "Houve um erro ao enviar sua mensagem" },
            { status: 500 }
        );
    }
}
