import  * as Promise  from 'promise';


export class AppconfigService {
    static GetSetting = (key: string) => {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                var result = {};
                result[key] = 'Spock';
                resolve(result);
            }, 1000);
        });
    }
}
