import {defineStore} from 'pinia';

export interface SpecDiaryInfo {
    diary_id: string;
    diary_link: boolean;
}


export interface GradesInfo {
    coff: number;
    grade: number;
    date: string;
}

export interface SubjectsInfo {
    subject_name: string;
    grade: GradesInfo[] | null;
    new_type_grade: number | null;
    old_type_grade: number | null;
}


export interface DiaryInfo {
    quarter_name: string;
    quarter_date: string;
    type_grade: string;
    subjects: SubjectsInfo[] | null;
}


export interface DistributionInfo {
    distribution_type: string | null;
    distribution_status: boolean | null;
}


export interface ReferralInfo {
    user_id: string;
    invited_by: string;
}


export const useDiaryState = defineStore('diary', {
    state: () => ({
        spec_diary: null as SpecDiaryInfo | null,
        diary_info: null as DiaryInfo[] | null,
        distribution: null as DistributionInfo[] | null,
        referrals: null as ReferralInfo[] | null,
        is_active: null as boolean | null,


        error: null as string | null,
        access_token: null as string | null,
    }),
    actions: {
        async loadAllDiary() {
            try {
                const {data, status, error}: any = await useFetch('http://localhost:8000/user/me', {
                    method: 'get',
                    headers: {'Authorization': 'Bearer ' + this.access_token},
                });

                if (data.value) {

                    this.spec_diary = data.value.spec_diary;
                    this.diary_info = data.value.diary_info;
                    this.distribution = data.value.distribution;
                    this.referrals = data.value.referrals;
                    this.is_active = data.value.is_active;

                } else {
                    console.error(`API error: ${error.statusCode}`)
                    this.error = data?.value?.detail || 'Unknown error occurred';
                }
            } catch (error: any) {
                this.error = error?.message || 'Something went wrong. Please try again later.';
            }
        },
    },
});