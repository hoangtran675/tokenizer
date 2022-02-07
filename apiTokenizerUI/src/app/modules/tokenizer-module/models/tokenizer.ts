import { InputBoolean } from "ng-zorro-antd/core/util";

export interface TokenVN {
    pyvi: string;
    underthesea: string;
    vncore: string;
  }
//  kết quả trả vể từ api sẽ có dạng trên
//  tránh việc any cho kiểu dữ liệu list_word và postag
export interface tranfer_data {
    data : TokenVN[];
    loading : boolean;
}
