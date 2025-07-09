import dayjsLib from 'dayjs';
import 'dayjs/locale/pt-BR';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjsLib.locale('pt-br');
dayjsLib.extend(relativeTime);

export const dayjs = dayjsLib;
