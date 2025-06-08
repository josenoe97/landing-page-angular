const nodemailer = require('nodemailer');

exports.sendNewsletterEmail = async (req, res) => {
  const { name, email } = req.body; // ainda pode usar para o corpo do email, se quiser

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'junyor75821@gmail.com',
      pass: 'eclx bwce bnmr iudh'
    }
  });

  const mailOptions = {
    from: 'junyor75821@gmail.com',
    to: 'edsonjunior9701@gmail.com', // <- aqui é o destino fixo
    subject: 'Nova inscrição na newsletter',
    text: `Nome: ${name}\nEmail informado: ${email}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar e-mail', error });
  }
};
