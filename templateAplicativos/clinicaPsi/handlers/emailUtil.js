import Mailer from 'react-native-mail'; // Ou import { openInbox } from 'react-native-email-link';

export const handleEmailPress = (emailPsicologo) => {
  Mailer.mail({
    subject: 'Informações e Orçamento para Desenvolvimento de App - Saúde Mental',
    recipients: [emailPsicologo],
    body: `Olá [Nome do Psicólogo(a)],\n\nVi seu anúncio na GetNinjas sobre o app de saúde mental. Sou desenvolvedor de software e tenho interesse no projeto.\n\nPara te enviar um orçamento preciso, preciso de mais detalhes:\n\n*   Funcionalidades desejadas\n*   Público-alvo\n*   Plataformas (iOS, Android, Web)\n*   Preferências de design\n*   Prazo\n*   Orçamento estimado\n\nPodemos conversar por aqui ou agendar uma ligação para alinharmos tudo?\n\nAbraços,\n[Seu Nome]`,
    isHTML: false,
  }, (error, event) => {
    if (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao enviar o email.');
    }
  });
};
