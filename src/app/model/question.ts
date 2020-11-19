import { Options } from '../model/options';

export interface Question{
    questionText: string,
    questionType: string,
    options: Options[],
}